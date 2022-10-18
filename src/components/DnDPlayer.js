import { useDrag } from 'react-dnd'
import { ItemTypes } from '../utils/ItemTypes.js'

const DnDPlayer = ({ id, left, top, children }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.PLAYER,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],
  )
  
  if (isDragging) return <div ref={drag} />

  return (
    <div className="player"
    ref={drag}
    style={{position: 'absolute', left, top }}
    data-testid="player">{children}</div>
  )
}

export default DnDPlayer