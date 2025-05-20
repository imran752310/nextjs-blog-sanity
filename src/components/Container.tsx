

export default function Container({children}:{children:React.ReactNode}) {
  return (
    <div className="px-6 xs:px-8 sm:px-12  lg:px-10 xl:px-15 2xl:px-28">
      {children}
    </div>
  )
}
