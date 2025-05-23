'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function StyleGuide() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Design System Style Guide</h1>
        <p className="text-muted-foreground">
          Consistent styling using semantic color tokens
        </p>
      </div>

      {/* Color Palette */}
      <Card className="card-primary">
        <CardHeader>
          <CardTitle>Color Palette</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-16 bg-background border border-border rounded-lg" />
              <p className="text-sm font-medium">Background</p>
              <p className="text-xs text-muted-foreground">bg-background</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-card border border-border rounded-lg" />
              <p className="text-sm font-medium">Card</p>
              <p className="text-xs text-muted-foreground">bg-card</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-muted border border-border rounded-lg" />
              <p className="text-sm font-medium">Muted</p>
              <p className="text-xs text-muted-foreground">bg-muted</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-primary border border-border rounded-lg" />
              <p className="text-sm font-medium">Primary</p>
              <p className="text-xs text-muted-foreground">bg-primary</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Buttons */}
      <Card className="card-primary">
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button className="button-primary">Primary Button</Button>
            <Button className="button-secondary">Secondary Button</Button>
            <Button className="button-ghost">Ghost Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>
        </CardContent>
      </Card>

      {/* Cards */}
      <Card className="card-primary">
        <CardHeader>
          <CardTitle>Cards</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="card-primary">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Primary Card</h3>
                <p className="text-muted-foreground">
                  Uses bg-card with border-border
                </p>
              </CardContent>
            </Card>
            <Card className="card-secondary">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Secondary Card</h3>
                <p className="text-muted-foreground">
                  Uses bg-muted with border-border
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Inputs */}
      <Card className="card-primary">
        <CardHeader>
          <CardTitle>Form Elements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="example-input" className="text-sm font-medium">
              Input Field
            </label>
            <Input
              id="example-input"
              placeholder="Enter text here..."
              className="input-primary"
            />
          </div>
        </CardContent>
      </Card>

      {/* Typography */}
      <Card className="card-primary">
        <CardHeader>
          <CardTitle>Typography</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Heading 1</h1>
            <h2 className="text-3xl font-semibold">Heading 2</h2>
            <h3 className="text-2xl font-medium">Heading 3</h3>
            <p className="text-foreground">
              Regular text using text-foreground
            </p>
            <p className="text-muted-foreground">
              Muted text using text-muted-foreground
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
