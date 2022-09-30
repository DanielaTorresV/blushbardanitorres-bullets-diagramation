import React, { PropsWithChildren } from "react"
import { BulletsSchema } from "./BulletTypes"
import { useDevice } from "vtex.device-detector"
import { useListContext } from "vtex.list-context"
import { getBulletsAsTSXList } from "./modules/bulletsAsList"

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children
}: PropsWithChildren<BulletGroupProps>
) => {
  const { isMobile } = useDevice();
  const { list } = useListContext() || [];

  console.log("bullets", bullets)

  const bulletsContent = getBulletsAsTSXList(bullets);

  if (false){
    console.log(children, list)
  }
  return (
    <>
    {isMobile ?
      <div>
        {bulletsContent}
      </div>
      :
      <div>
        Estamos en Desktop!!
      </div>
    }
    </>
  )
}

export default BulletGroup
