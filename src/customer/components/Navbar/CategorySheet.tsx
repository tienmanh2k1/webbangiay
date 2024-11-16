import React from 'react'
import { menLevelTwo } from '../../../data/category/levelTwo/menLevelTwo'
import { menLevelThree } from '../../../data/category/levelThree/menLevelThree'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const categoryTwo:{[key:string]:any[]}={
    men:menLevelTwo,

}

const categoryThree:{[key:string]:any[]}={
    men:menLevelThree
}

const CategorySheet = ({selectCategory,setShowCategory}:any) => {
    const navigate = useNavigate();

    const childCategory=(category:any,parentCategoryId:any)=>{
        return category.filter((child:any)=>child.parentCategoryId===parentCategoryId);
    }

  return (
    <Box 
    sx={{zIndex:2}}
    className="bg-white shadow-lg lg:h-[300px] overflow-y-auto">
        <div className='flex text-sm flex-wrap'>

            {
                categoryTwo[selectCategory]?.map((item:any,index)=><div className={`p-8 lg:[-20%] ${index%2===0?"bg-slate-50":"bg-white"} w-1/5`}>
                    <p className='text-primary-color mb-5 font-semibold'>{item.name}</p>
                    <ul className='space-y-3'>
                        {childCategory(categoryThree[selectCategory],item.categoryId).map((item:any)=><div>
                                 <li onClick={()=>navigate("/products/"+item.categoryId)} 
                                 className='hover:text-primary-color cursor-pointer'>{item.name}</li>
                            </div>)}          

                    </ul>
                </div>)
            }

        </div>  
    </Box>
  )
}

export default CategorySheet