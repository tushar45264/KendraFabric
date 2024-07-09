import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

const ModelDialog = ({ onClose }) => {
  return (
    <Dialog defaultOpen onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button variant="outline">View Model</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg w-11/12 h-screen max-w-[100vw] sm:max-w-[100vw] md:max-w-[100vw] lg:max-w-[100vw] xl:max-w-[100vw]">
        <div className="flex flex-col min-h-[100dvh] overflow-auto">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary-foreground rounded-t-lg">
            <div className="container px-4 md:px-6 grid gap-6 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-primary-foreground">Acme Image Classifier</h1>
                <p className="text-lg text-primary-foreground">
                  A state-of-the-art deep learning model for classifying images into 1000 different categories.
                </p>
                <Link
                  to="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Model
                </Link>
              </div>
              <div className="hidden md:block">
                <img src="https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={500} height={500} alt="Model Thumbnail" className="rounded-lg" />
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 rounded-b-lg bg-background">
            <div className="container px-4 md:px-6 grid gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Model Details</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Architecture</h3>
                    <p className="text-muted-foreground">
                      The model uses a deep convolutional neural network with 50 layers, including residual connections
                      and attention mechanisms.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Input/Output</h3>
                    <p className="text-muted-foreground">
                      The model takes in a 224x224 RGB image as input and outputs a probability distribution over 1000
                      different object categories.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Training Data</h3>
                    <p className="text-muted-foreground">
                      The model was trained on the ImageNet dataset, which contains over 14 million labeled images
                      across 1000 different classes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Inference Time</h3>
                    <p className="text-muted-foreground">
                      The model can classify an image in under 50 milliseconds on a modern GPU, making it suitable for
                      real-time applications.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Performance Metrics</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Accuracy</h3>
                    <p className="text-4xl font-bold">92.3%</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Precision</h3>
                    <p className="text-4xl font-bold">94.1%</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Recall</h3>
                    <p className="text-4xl font-bold">91.7%</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">F1-Score</h3>
                    <p className="text-4xl font-bold">93.0%</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Retail</h3>
                    <p className="text-muted-foreground">
                      Automatically categorize product images for better search and recommendation experiences.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Autonomous Vehicles</h3>
                    <p className="text-muted-foreground">
                      Detect and classify objects in real-time for improved safety and navigation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Medical Imaging</h3>
                    <p className="text-muted-foreground">
                      Assist radiologists by automatically identifying and classifying medical images.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Social Media</h3>
                    <p className="text-muted-foreground">
                      Automatically tag and categorize user-generated images for better content organization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ModelDialog
