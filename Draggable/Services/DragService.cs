using Microsoft.JSInterop;
using System;
using System.Threading.Tasks;

namespace Draggable.Services
{
    public class DragService : IDragService
    {
        private readonly Lazy<Task<IJSObjectReference>> moduleTask;

        public DragService(IJSRuntime jSRuntime)
        {
            moduleTask = new(() => jSRuntime.InvokeAsync<IJSObjectReference>("import", "./DragService.js").AsTask());
        }

        public async Task Drag(string div)
        {
            var module = await moduleTask.Value;
            await module.InvokeVoidAsync("StartDrag", div);
        }
    }
}
