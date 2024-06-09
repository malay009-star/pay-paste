

const HeroSection = ({ img, title }) => {
  return (
    <div className="h-80 bgStyle" style={{ backgroundImage: `URL(${img})` }}>
      <div className="container pt-12">
        <h2 className="lg-heading text-center">{title}</h2>
      </div>
    </div>
  )
}

export default HeroSection
