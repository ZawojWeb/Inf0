import Hero from "./components/hero"
import FAQ from "./components/FAQ"
import HowWork from "./components/HowWork"
import Layout from "./components/layout"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FAQ />
      <HowWork />
    </Layout>
  )
}
