import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select"
import { Textarea } from "../ui/textarea"

const CreateApp=()=>{
  return (
    <Dialog defaultClose>
      <DialogTrigger asChild>
        <Button className="bg-sky-800 text-white hover:text-white hover:bg-sky-800/90" variant="outline">Create App</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create App</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">App Name</Label>
              <Input id="name" placeholder="Enter app name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="model">Base Model</Label>
              <Select id="model">
                <SelectTrigger>
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt">GPT</SelectItem>
                  <SelectItem value="openai">OpenAI</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="prompt">Prompt</Label>
            <Textarea id="prompt" placeholder="Enter prompt" className="min-h-[100px]" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="greeting">Greeting Message</Label>
            <Input id="greeting" placeholder="Enter greeting message" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Assistant Bio</Label>
            <Textarea id="bio" placeholder="Enter assistant bio" className="min-h-[100px]" />
          </div>
        </div>
        <DialogFooter>
          <Button className="bg-sky-800 text-white hover:bg-sky-800/90" type="submit">Create App</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateApp