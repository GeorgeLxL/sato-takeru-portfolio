import { useEffect, useState } from "react"

export default function useClick (handler: any) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      handler()
    }

    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("click", handleClick)
    }

  }, [handler])
}