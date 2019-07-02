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
    public class LoginController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Login
        public IQueryable<Login> GetLogin()
        {
            return db.Login;
        }

        

        // PUT: api/Login/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutLogin(int id, Login login)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != login.USR_ID)
            {
                return BadRequest();
            }

            db.Entry(login).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoginExists(id))
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

        // POST: api/Login
        [ResponseType(typeof(Login))]
        public IHttpActionResult PostWLogin(Login login)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Login.Add(login);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = login.USR_ID }, login);
        }

        // DELETE: api/Login/5
        [ResponseType(typeof(Login))]
        public IHttpActionResult DeleteLogin(int id)
        {
            Login login = db.Login.Find(id);
            if (login == null)
            {
                return NotFound();
            }

            db.Login.Remove(login);
            db.SaveChanges();

            return Ok(login);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LoginExists(int id)
        {
            return db.Login.Count(e => e.USR_ID == id) > 0;
        }
    }
}