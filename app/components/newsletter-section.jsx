import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-black text-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300 mb-8">
            Stay updated with our latest offers, new arrivals, and exclusive discounts.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-amber-400/50 focus:border-amber-400 text-white"
              required
            />
            <Button className="bg-amber-400 hover:bg-amber-500 text-black">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

