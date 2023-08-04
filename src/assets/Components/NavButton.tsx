export default function NavButton({pageRef}:any) {
  return (
    <div className='navbutton'>
      <div className='navbutton1'>
        <button onClick={()=> pageRef.current.scrollTo(0)}>Home</button>
      </div>
      <div className='navbutton2'>
      <button onClick={()=> pageRef.current.scrollTo(0.9)}>Works</button>
      </div>
      <div className='navbutton3'>
      <button onClick={()=> pageRef.current.scrollTo(3.2)}>Socials</button>
      </div>
    </div>
  )
}
