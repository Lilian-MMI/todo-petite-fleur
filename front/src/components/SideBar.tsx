import ButtonCreate from './ButtonCreate'
import '../style/SideBar.css'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Logo from './Logo'

function SideBar(){
    let nameLists = ['Idées Activitées', 'Idées Recettes']
    return <>
    <Logo/>
    <ButtonCreate name="Create list"/>
        <TabGroup>
            <TabList className="flex gap-4">
            {nameLists.map((item, i) =>(
                <Tab
                key={i}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
                    {item}
                </Tab>
            ))}
        </TabList>
      </TabGroup>
    </>
}

export default SideBar
