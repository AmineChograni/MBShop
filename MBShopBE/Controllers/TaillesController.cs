using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MBShopBE.Context;
using MBShopBE.Models;

namespace MBShopBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaillesController : ControllerBase
    {
        private readonly MbDbContext _context;

        public TaillesController(MbDbContext context)
        {
            _context = context;
        }

        // GET: api/Tailles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Taille>>> GetTailles()
        {
            return await _context.Tailles.ToListAsync();
        }

        // GET: api/Tailles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Taille>> GetTaille(int id)
        {
            var taille = await _context.Tailles.FindAsync(id);

            if (taille == null)
            {
                return NotFound();
            }

            return taille;
        }

        // PUT: api/Tailles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaille(int id, Taille taille)
        {
            if (id != taille.Id)
            {
                return BadRequest();
            }

            _context.Entry(taille).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TailleExists(id))
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

        // POST: api/Tailles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Taille>> PostTaille(Taille taille)
        {
            _context.Tailles.Add(taille);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTaille", new { id = taille.Id }, taille);
        }

        // DELETE: api/Tailles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaille(int id)
        {
            var taille = await _context.Tailles.FindAsync(id);
            if (taille == null)
            {
                return NotFound();
            }

            _context.Tailles.Remove(taille);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TailleExists(int id)
        {
            return _context.Tailles.Any(e => e.Id == id);
        }
    }
}
