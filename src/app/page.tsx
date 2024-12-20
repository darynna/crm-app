import {headers} from "next/headers";
import AddCompanyButton from '@/src/app/components/add-company-button';
import MagicButton from '@/src/app/components/magic_button';

export default function Home() {
    console.log(headers());
    return (
      <main>
        <h1 className="text-xl">Home page</h1>
        <AddCompanyButton />
          <MagicButton />
      </main>
    );
}
