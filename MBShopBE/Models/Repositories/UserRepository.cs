using MBShopBE.Context;

namespace MBShopBE.Models.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly MbDbContext context;

        public UserRepository(MbDbContext context)
        {
            this.context = context;
        }

        public User Create(User user)
        {
            throw new System.NotImplementedException();
        }
    }
}
