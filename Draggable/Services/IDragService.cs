using System.Threading.Tasks;

namespace Draggable.Services
{
    public interface IDragService
    {
        public Task Drag(string div);
    }
}
