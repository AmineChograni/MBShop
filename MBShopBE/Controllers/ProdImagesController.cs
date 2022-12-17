using MBShopBE.Context;
using MBShopBE.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http.Headers;
using System;
using System.Collections.Generic;

namespace MBShopBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdImagesController : ControllerBase
    {
        private readonly MbDbContext _context;

        public ProdImagesController(MbDbContext context)
        {
            _context = context;
        }


        [HttpPost, DisableRequestSizeLimit]
        public async Task<IActionResult> UploadAsync()
        {
            try
            {
                var formCollection = await Request.ReadFormAsync();
                var files = formCollection.Files;


                var folderName = Path.Combine("Resources", "ProductImg");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

                var dict = Request.Form.ToDictionary(x => x.Key, x => x.Value.ToString());
                var prodId = Int32.Parse(dict["productId"]);
                var color = dict["productId"];
                if (files.Count > 0)
                {
                    List<ProdImage> prodImages = new List<ProdImage>();
                    foreach (var file in files)
                    {
                        var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                        var fullPath = Path.Combine(pathToSave, fileName);
                        var dbPath = Path.Combine(folderName, fileName);
                        using (var stream = new FileStream(fullPath, FileMode.Create))
                        {
                            file.CopyTo(stream);
                        }

                        var pimage = new ProdImage();
                        pimage.ImageURL = dbPath;
                        pimage.ProductId = prodId;
                        pimage.Color = color;

                        prodImages.Add(pimage);


                        _context.ProdImages.Add(pimage);
                        await _context.SaveChangesAsync();
                    }

                    

                    //CreatedAtAction("GetProdImage", new { id = pimage.Id }, pimage);
                    
                    return StatusCode(200);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }
    }
}
