type Props = {
  height?: number
  width?: number
}

const Check = ({ height = 32, width = 32 }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M22.6757 10.2629C23.0828 10.636 23.1104 11.2686 22.7372 11.6757L14.4872 20.6757C14.2977 20.8824 14.0303 21 13.75 21C13.4697 21 13.2023 20.8824 13.0129 20.6757L9.26285 16.5848C8.88966 16.1777 8.91716 15.5451 9.32428 15.1719C9.7314 14.7988 10.364 14.8263 10.7372 15.2334L13.75 18.5201L21.2629 10.3243C21.636 9.91716 22.2686 9.88966 22.6757 10.2629Z' />
    </svg>
  )
}

export { Check }
