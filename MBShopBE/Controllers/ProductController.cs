using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MBShopBE.Context;
using MBShopBE.Models;
using Microsoft.CodeAnalysis;

namespace MBShopBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly MbDbContext _context;

        public ProductController(MbDbContext context)
        {
            _context = context;
        }

        // GET: api/Product
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            var products = await _context.Products.ToListAsync();
            foreach(var product in products)
            {
                var prodImages = _context.ProdImages.ToList();
                foreach (var prodImage in prodImages)
                {
                    if (prodImage.ProductId == product.Id)
                    {
                        product.ProdImages.Add(prodImage);
                    }
                } 

                var prodTailles = _context.Tailles.ToList();
                foreach (var prodTaille in prodTailles)
                {
                    if (prodTaille.ProductId == product.Id)
                    {
                        product.Tailles.Add(prodTaille);
                    }
                }

                var colors = _context.Couleurs.ToList();
                foreach (var color in colors)
                {
                    if (color.ProductId == product.Id)
                    {
                        product.Couleurs.Add(color);
                    }
                }
            }
            return products;
        }



        // GET: api/Product/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            var prodImages = _context.ProdImages.ToList();
            foreach(var prodImage in prodImages)
            {
                if(prodImage.ProductId == id)
                {
                    product.ProdImages.Add(prodImage);
                }
            }

            var prodTailles = _context.Tailles.ToList();
            foreach (var prodTaille in prodTailles)
            {
                if (prodTaille.ProductId == id)
                {
                    product.Tailles.Add(prodTaille);
                }
            }

            var colors = _context.Couleurs.ToList();
            foreach (var color in colors)
            {
                if (color.ProductId == id)
                {
                    product.Couleurs.Add(color);
                }
            }


            return product;
        }

        // PUT: api/Product/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
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

        // POST: api/Product

        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        }

        // DELETE: api/Product/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.Id == id);
        }
    }
}
