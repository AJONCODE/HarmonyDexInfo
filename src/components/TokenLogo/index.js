import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { isAddress } from '../../utils/index.js'
import OswapLogo from '../../assets/oswap_asset.png'
import NotFound from '../../assets/coin.png'
import BusdLogo from '../../assets/tokens/BUSD-bd1.png'
import FlokiOneLogo from '../../assets/tokens/FlokiONE.png'
import HarlLogo from '../../assets/tokens/HARL.png'

const BAD_IMAGES = {}

const Image = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: ${({ theme }) => theme.bgOSwap1 }
  border-radius: 9999px;
`

export default function TokenLogo({ address, size = '' }) {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [address])

  if (error || BAD_IMAGES[address]) {
    return (
      <Image src={NotFound} size={size} />
    )
  }

  // hard coded fixes for trust wallet api issues
  if (address?.toLowerCase() === '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb') {
    address = '0x42456d7084eacf4083f1140d3229471bba2949a8'
  }

  if (address?.toLowerCase() === '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f') {
    address = '0xc011a72400e58ecd99ee497cf89e3775d4bd732f'
  }

  if (address?.toLowerCase() === '0x01a4b054110d57069c1658afbc46730529a3e326') {
    return (
      <Image src={OswapLogo} size={size} />
    )
  }

  if (address?.toLowerCase() === '0x791fa343792f377369a0189fc69afa14ad12d3ac') {
    return (
      <Image src={BusdLogo} size={size} />
    )
  }

  if (address?.toLowerCase() === '0x24b6179e4062ed9baeace0e6081dbd55b6072380') {
    return (
      <Image src={FlokiOneLogo} size={size} />
    )
  }

  if (address?.toLowerCase() === '0x4518231a8fdf6ac553b9bbd51bbb86825b583263') {
    return (
      <Image src={HarlLogo} size={size} />
    )
  }

  let path = 'https://openfi.dev/tokens/byAddress/' + address.toLowerCase() + '.png'


  return (
    <Image
      src={path}
      size={size}
      onError={(event) => {
        BAD_IMAGES[address] = true
        setError(true)
        event.preventDefault()
      }}
    />
  )
}
