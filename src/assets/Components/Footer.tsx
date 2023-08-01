type SocialProps = {
  name: string;
  link: string;
  order: number
}

export default function Footer() {
  return (
    <div className="footer">
      <Social order={1}  name={'x'}  link={'https://x.com/metehandoenmez'}></Social>
      <Social order={2}  name={'linkedin'}  link={'https://www.linkedin.com/in/metehandoenmez/'}></Social>
      <Social order={3}  name={'discord'}  link={'https://discord.gg/9ze3cAQjZx'}></Social>
      <Social order={4}  name={'instagram'}  link={'https://www.instagram.com/metehandoenmez/'}></Social>
    </div>
  )
}

function Social({name, link, order}:SocialProps) {
  return (
      <div>
        <a href={link} className={order%2===0 ? 'socialTop' : 'socialBottom' }>
          <div className="img-cont"><img draggable="false" className="footerImg" src={`/${name}.png`} alt="" />
          </div>
          
        </a>
        </div>
      
  )
}
