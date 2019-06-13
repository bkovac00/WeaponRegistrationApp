using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WPNREG.Models;

namespace WPNREGS.Controllers
{
    public class LoginController : ApiController
    {
        
        //For user login   
       
        [HttpPostAttribute]
        public Response Login(Login Lg)
        {
            DemologinEntities DB = new DemologinEntities();
            var Obj = DB.Usp_Login(Lg.UserName, Lg.Password).ToList<>().FirstOrDefault();
            if (Obj.Status == 0)
                return new Response { Status = "Invalid", Message = "Invalid User." };
            if (Obj.Status == -1)
                return new Response { Status = "Inactive", Message = "User Inactive." };
            else
                return new Response { Status = "Success", Message = Lg.UserName };
        }

        //For new user Registration  
        [Route("Api/Login/createcontact")]
        [HttpPost]
        public object createcontact(Registration Lvm)
        {
            try
            {
                DemologinEntities db = new DemologinEntities();
                WeaponMaster Em = new WeaponMaster();
                if (Em.UserId == 0)
                {
                    Em.UserName = Lvm.UserName;
                    Em.LoginName = Lvm.LoginName;
                    Em.Password = Lvm.Password;
                    Em.Email = Lvm.Email;
                    Em.ContactNo = Lvm.ContactNo;
                    Em.Address = Lvm.Address;
                    Em.IsApporved = Lvm.IsApporved;
                    Em.Status = Lvm.Status;
                    db.WeaponMasters.Add(Em);
                    db.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "SuccessFully Saved." };
                }
            }
            catch (Exception)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }
    }

}
