import s from './sidebar.module.scss';

export function Sidebar() {
    return (
    <>
        <div className="flex flex-col w-64">
            <div className="flex flex-col h-0 flex-1">
                <div className={`${s.ares_sidebar} flex-1 flex flex-col pt-5 pb-4 overflow-y-auto`}>
                    <div className="mt-5 flex-1 px-2 space-y-1">
                        
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}