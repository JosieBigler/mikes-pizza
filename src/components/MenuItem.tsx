import { FunctionComponent } from 'react';

export interface MenuItemProps {
   name: string;
   price: string;
   description: string;
   imageUrl: string; 
}


export const MenuItem : FunctionComponent<MenuItemProps> = (props: MenuItemProps) => {
    return (
        <>
            <div className="mb-8">
                <div className='flex'>
                    <h3 className="flex-1 text-2xl font-bold mb-2">{props.name}</h3> 
                    <p className="flex-1 flex text-lg font-semibold justify-end">{props.price}</p>

                </div>
                <div className="border-t"></div>
                <p className="text-lg">{props.description}</p>
            </div>
        </>
    );
}

