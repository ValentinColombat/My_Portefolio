interface TitleProps {
    title: string
    dark?: boolean
}

const Title = ({ title, dark = false }: TitleProps) => {
  return (
    <div className="text-center mb-12 section-modern">
      <h1 className={`uppercase font-black text-4xl md:text-6xl mb-4 tracking-tight ${dark ? 'text-black' : 'text-gray-900'}`}>
        {title}
      </h1>
      <div className={`w-32 h-1 mx-auto rounded-full ${dark ? 'bg-black/40' : 'bg-amber-400'}`}></div>
    </div>
  )
}

export default Title
