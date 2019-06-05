using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WPNREG.Models;

namespace WPNREG.Controllers
{
    public class WeaponController : ApiController
    {
        // [Route("api/weapons")]
        private DBModel db = new DBModel();

        // GET: api/Weapon
        public IQueryable<Weapon> GetWeapon()
        {
            return db.Weapon;
        }


    
        // PUT: api/Weapon/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutWeapon(int id, Weapon weapon)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != weapon.WPN_ID)
            {
                return BadRequest();
            }

            db.Entry(weapon).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WeaponExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Weapon
        [ResponseType(typeof(Weapon))]
        public IHttpActionResult PostWeapon(Weapon weapon)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Weapon.Add(weapon);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = weapon.WPN_ID }, weapon);
        }

        // DELETE: api/Weapon/5
        [ResponseType(typeof(Weapon))]
        public IHttpActionResult DeleteWeapon(int id)
        {
            Weapon weapon = db.Weapon.Find(id);
            if (weapon == null)
            {
                return NotFound();
            }

            db.Weapon.Remove(weapon);
            db.SaveChanges();

            return Ok(weapon);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WeaponExists(int id)
        {
            return db.Weapon.Count(e => e.WPN_ID == id) > 0;
        }
    }
}