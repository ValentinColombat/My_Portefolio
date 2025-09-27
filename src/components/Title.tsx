interface TitleProps {
    title : string
}
const Title = ({title} : TitleProps) => {
  return (
    <div className="text-center mb-12 section-modern">
      <h1 className="uppercase font-bold text-4xl md:text-6xl modern-gradient-text mb-4 tracking-tight">
        {title}
      </h1>
      <div className="w-32 h-1 bg-gradient-modern mx-auto rounded-full relative">
        <div className="absolute inset-0 bg-gradient-accent rounded-full blur-sm opacity-60"></div>
      </div>
    </div>
  )
}

export default Title