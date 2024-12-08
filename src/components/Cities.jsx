import City from './City';
import Loader from './Loader';

export default function Cities({ cities, loading }) {

  return (
    <>
    {loading ? <Loader /> :
      <div style={{ width: '80%' }}>
        {cities.map((item) => <City key={item.id} cityObj={item} />)}
      </div>
    }
    </>
  )
}
