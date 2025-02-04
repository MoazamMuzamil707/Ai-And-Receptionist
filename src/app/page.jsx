import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    console.log(window.location.href);
  }, []);

  return <div>Hello World</div>;
}
