import { getClient } from '@/Lib/client';
import { VERSION_QUERY } from '@/Lib/queries';

const Version = async () => {
  const client = getClient();
  const { data } = await client.query({
    query: VERSION_QUERY,
  });

  console.log(data);
  return (
    <>
      {data.appVersions.map((version) => (
        <div className="item">{version.vName}</div>
      ))}
    </>
  );
};

export default Version;
