import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Quality',
    description:
      'At Axon, quality stands as the cornerstone of our operations. We specialize in providing a unique range of products sourced meticulously from surplus inventories and ship breaking yards, ensuring reliability and durability in every piece we offer.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Support',
    description:
      `
      At Axon, our dedication to customer satisfaction extends far beyond the point of sale. With our unwavering commitment to excellence, we offer round-the-clock, 24/7 after-sales support`,
    icon: LockClosedIcon,
  },
  {
    name: 'Around the globe',
    description:
      'Spanning across the globe, Axon leverages strategic partnerships to streamline operations for our valued customers worldwide. With our extensive network, we facilitate convenient payment options, seamless connectivity to regional offices, and a unified point of contact for enhanced accessibility. ',
    icon: ArrowPathIcon,
  },
  {
    name: 'Security',
    description:
      'At Axon, our dedication to clarity and trust in payments underscores our commitment to delivering exceptional service and building enduring partnerships across the globe.',
    icon: FingerPrintIcon,
  },
]
// <div className="bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>

export default function Example() {
  return (
    <>
    <div className="bg-white py-32">
      <div className="lg:hidden overflow-hidden sm:h-full sm:py-32">
        <img
          className="w-full"
          src="/about.jpg"
          alt="Transistor"
          width={158}
          height={48}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl bg-cover bg-center lg:text-center">
          <h2 className="text-base py-5 font-semibold leading-7 text-indigo-600">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to know to join us
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    
    </div>
    </>
  )
}
