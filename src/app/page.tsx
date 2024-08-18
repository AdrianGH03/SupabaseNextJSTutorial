import { supabaseAdmin, supabaseUser } from "@/lib/supabase";


export default function Home() {
  const setNewView = async () => {
    const { data, error } = await supabaseUser
      .from('views')
      .insert({
        name: 'random name'
      })
    if (error) {
      console.log(error)
    }
    if (data) {
      console.log(data)
    }
  };

  setNewView();
  return <div>Hello</div>
}
