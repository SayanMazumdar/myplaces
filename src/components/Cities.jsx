import City from './City';

export default function Cities({ cities }) {
  return (
    <div style={{width: '80%'}}>
      {cities.map((item) => <City key={item.id} cityObj={item} />)}
    </div>
  )
}
