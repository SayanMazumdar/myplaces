import City from './City';
import Loader from './Loader';
import { useCitiesContext } from "../CitiesContext";

export default function Cities() {

  const { cities, loading } = useCitiesContext();
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
