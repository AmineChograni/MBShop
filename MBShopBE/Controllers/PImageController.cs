using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System;
using System.Net.Http.Headers;
using System.Linq;
using System.Threading.Tasks;
using MBShopBE.Context;
using MBShopBE.Models;

namespace MBShopBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PImageController : ControllerBase
    {
        private readonly MbDbContext _context;

        public PImageController(MbDbContext context)
        {
            _context = context;
        }


        [HttpPost, DisableRequestSizeLimit]
        public async Task<IActionResult> UploadAsync()
        {
            try
            {
                var formCollection = await Request.ReadFormAsync();
                var file = formCollection.Files.First();
                

                var folderName = Path.Combine("Resources", "ProductImg");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    var pimage = new MImage();
                    pimage.ImageURL = dbPath;
                    var dict = Request.Form.ToDictionary(x => x.Key, x => x.Value.ToString());
                    pimage.ProductId = Int32.Parse(dict["ProductId"]);

                    _context.MImages.Add(pimage);
                    await _context.SaveChangesAsync();
                    CreatedAtAction("GetMImage", new { id = pimage.Id }, pimage);
                    return Created("test",pimage);
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
