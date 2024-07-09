import React from 'react'
import { Card } from "../ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"

const CardItem = ({ onClick }) => {
  return (
    <Card onClick={onClick} className="w-full max-w-sm p-6 grid gap-6">
      <div className="flex items-center gap-4">
        <Avatar className="w-16 h-16 border-2">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">AI Assistant</h3>
          <p className="text-muted-foreground">A powerful AI-powered assistant to help you with a variety of tasks.</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="bg-muted rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">AI</span>
        <span className="bg-muted rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">Assistant</span>
        <span className="bg-muted rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">Productivity</span>
        <span className="bg-muted rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">Automation</span>
      </div>
    </Card>
  )
}

export default CardItem