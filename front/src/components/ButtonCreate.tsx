import { Button } from '@headlessui/react'
  
function ButtonCreate({name} : {name : string}){
    return <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
        {name}
    </Button>
}

export default ButtonCreate
