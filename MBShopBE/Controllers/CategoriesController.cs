using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MBShopBE.Context;
using MBShopBE.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using System.Xml.Linq;


namespace MBShopBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly MbDbContext _context;

        public CategoriesController(MbDbContext context)
        {
            _context = context;
        }

        // GET: api/Categories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            return await _context.Categories.ToListAsync();
        }

        // GET: api/Categories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategory(int id)
        {
            var category = await _context.Categories.FindAsync(id);

            if (category == null)
            {
                return NotFound();
            }

            //var prodImages = _context.ProdImages.ToList();



            var products = _context.Products.ToList();
            var prodImages = _context.ProdImages.ToList();
            var prodTailles = _context.Tailles.ToList();
            var colors = _context.Couleurs.ToList();

            foreach (var product in products)
            {
                if (product.CategoryId == id)
                {
                    foreach (var prodImage in prodImages)
                    {
                        if (prodImage.ProductId == product.Id)
                        {
                            product.ProdImages.Add(prodImage);
                        }
                    }
                    foreach (var prodTaille in prodTailles)
                    {
                        if (prodTaille.ProductId == product.Id)
                        {
                            product.Tailles.Add(prodTaille);
                        }
                    }
                    foreach (var color in colors)
                    {
                        if (color.ProductId == product.Id)
                        {
                            product.Couleurs.Add(color);
                        }
                    }
                    category.Products.Add(product);
                }
            }

            



            return category;
        }

        // GET: api/Categories/5/title
        [HttpGet("{id}/{title}")]
        public async Task<ActionResult<Category>> GetCategory(int id,string title)
        {
            var category = await _context.Categories.FindAsync(id);


            if (category == null)
            {
                
                return NotFound();
            }

            //var prodImages = _context.ProdImages.ToList();



            var products = _context.Products.Where(p => p.Label.Contains(title)).ToList();
            var prodImages = _context.ProdImages.ToList();
            var prodTailles = _context.Tailles.ToList();
            var colors = _context.Couleurs.ToList();

            foreach (var product in products)
            {
                if (product.CategoryId == id)
                {
                    foreach (var prodImage in prodImages)
                    {
                        if (prodImage.ProductId == product.Id)
                        {
                            product.ProdImages.Add(prodImage);
                        }

                    }
                    foreach (var prodTaille in prodTailles)
                    {
                        if (prodTaille.ProductId == product.Id)
                        {
                            product.Tailles.Add(prodTaille);
                        }
                    }
                    foreach (var color in colors)
                    {
                        if (color.ProductId == product.Id)
                        {
                            product.Couleurs.Add(color);
                        }
                    }


                }
            }

            return category;
        }

        // PUT: api/Categories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategory(int id, Category category)
        {
            if (id != category.Id)
            {
                return BadRequest();
            }

            _context.Entry(category).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Categories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Category>> PostCategory(Category category)
        {
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCategory", new { id = category.Id }, category);
        }

        // DELETE: api/Categories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null)
            {
                return NotFound();
            }

            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoryExists(int id)
        {
            return _context.Categories.Any(e => e.Id == id);
        }
    }
}
