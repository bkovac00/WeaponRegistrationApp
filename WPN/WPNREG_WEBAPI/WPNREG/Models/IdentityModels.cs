using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WPNREG.Models
{
    public class ApplicationUser : IdentityUser
    {

    }

    public class ApplicationdbContext : IdentityDbContext<ApplicationUser> {
        public ApplicationdbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {

        }
    }
}