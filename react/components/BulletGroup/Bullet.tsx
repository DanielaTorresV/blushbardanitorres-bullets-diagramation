import React from "react"
import { Link } from "vtex.render-runtime"
import  { LinkProps }  from "./BulletTypes"
//import { useCssHandles } fron "vtex.css-handles"

type Props = {
  src: string
  titleBullet: string
  link: LinkProps
}

const Bullet = ({src, titleBullet, link}: Props) => {
  console.log("Datos para mi Bullet", src, titleBullet, link)
  return (
    <div>
      <Link
        to = { link.url}
      >
        <p>Mi Imagen: {src}</p>
        <p>Titulo: {titleBullet}</p>
      </Link>
    </div>
  )
}

Bullet.schema = {
  title: "Bullet",
  type: "object",
  properties: {
    src: {
      title: "Bullet Image",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    }
  }
}

export default Bullet
