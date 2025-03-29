"use client";
import {useRef} from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
  Card,
  CardContent,
} from "@/components/ui/card"


import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { EllipsisVertical } from 'lucide-react';

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog';
import { ScrollArea } from '@/components/ui/scroll-area'; 
import { Safari } from "@/components/magicui/safari";
import { img } from "motion/react-client";




export function MorphingDialogBasicTwo() {
  const img = useRef<any>(null);
  function SafariDemo() {
    return (
      <div className="relative">
        <Safari
          url="magicui.design"
          className="size-full"
          videoSrc="https://videos.pexels.com/video-files/27180348/12091515_2560_1440_50fps.mp4"
        />
      </div>
    );
  }
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 24,
      }}
    >
      <ContextMenu >
        <ContextMenuTrigger asChild >
        
          <div
            style={{
              borderRadius: '12px',
            }}
            className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 w-[270px]'
          ><MorphingDialogTrigger>
            <img
            ref={img}
              src='https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg'
              alt='Ghost in the shell - Kôkaku kidôtai'
              className='h-48 w-full object-cover'
              onTouchStart={(e:any)=>e.target.src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRzcWFxYzQwYnI1b2MweTQ5bDdqdmJ5MzdiaTZhN2xmMDhpZXd4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wGUpSQWxnYpji/giphy.gif"}
              onMouseLeave={(e:any)=>e.target.src='https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg'}
            /></MorphingDialogTrigger>
            <div style={{ justifyContent: "space-between" }} className='p-2 flex'>
              <h1 className='text text-sm'>
                Ghost in the Shell
              </h1>
              

              <EllipsisVertical className="h-4" onClick={(event) => {
                const contextMenuEvent = new MouseEvent("contextmenu", {
                  bubbles: true,
                  cancelable: true,
                  view: window,
                  clientX: event.clientX,
                  clientY: event.clientY
                });

                event.target.dispatchEvent(contextMenuEvent);
              }} />
            </div>
          </div>
          
        </ContextMenuTrigger>
        <ContextMenuContent
          className="w-48 text"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(245, 245, 245, 0.5), rgba(245, 245, 245, 0.5))",
          }}
        >
          <ContextMenuItem className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
            About This File
          </ContextMenuItem>
          <ContextMenuSeparator className="mx-3 my-1" />
          <ContextMenuItem onClick={()=>img.current.click()} className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
            Open
          </ContextMenuItem>
          <ContextMenuSeparator className="mx-3 my-1" />
          <ContextMenuItem className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
            Move
          </ContextMenuItem>
          <ContextMenuItem className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
            Copy
          </ContextMenuItem>
          <ContextMenuSeparator className="mx-3 my-1" />
          <ContextMenuItem className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
            Delete
          </ContextMenuItem>
          <ContextMenuItem className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
            Rename
          </ContextMenuItem>

        </ContextMenuContent>
      </ContextMenu>

      
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: '12px',
          }}
          className=' h-auto w-[90%]  border border-gray-100 bg-white'
        >
         <SafariDemo/>
          <MorphingDialogClose className='text-zinc-500' />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}


export function TiltCard1() {
  return (
    <>
      <ContextMenu >
        <ContextMenuTrigger asChild >
          <div
            style={{
              borderRadius: '12px',
            }}
            className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 w-[270px]'
          >
            <img
              src='https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg'
              alt='Ghost in the shell - Kôkaku kidôtai'
              className='h-48 w-full object-cover'
              onMouseEnter={(e:any)=>e.target.src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRzcWFxYzQwYnI1b2MweTQ5bDdqdmJ5MzdiaTZhN2xmMDhpZXd4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wGUpSQWxnYpji/giphy.gif"}
              onMouseOut={(e:any)=>e.target.src='https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg'}
            />
            <div style={{ justifyContent: "space-between" }} className='p-2 flex'>
              <h1 className='text text-sm'>
                Ghost in the Shell
              </h1>

              <EllipsisVertical className="h-4" onClick={(event) => {
                const contextMenuEvent = new MouseEvent("contextmenu", {
                  bubbles: true,
                  cancelable: true,
                  view: window,
                  clientX: event.clientX,
                  clientY: event.clientY
                });

                event.target.dispatchEvent(contextMenuEvent);
              }} />
            </div>
          </div>

        </ContextMenuTrigger>
        <ContextMenuContent
          className="w-48 text"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(245, 245, 245, 0.5), rgba(245, 245, 245, 0.5))",
          }}
        >
          <ContextMenuItem className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
            About This File
          </ContextMenuItem>
          <ContextMenuSeparator className="mx-3 my-1" />
          <ContextMenuItem className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
            Open
          </ContextMenuItem>
          <ContextMenuSeparator className="mx-3 my-1" />
          <ContextMenuItem className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
            Move
          </ContextMenuItem>
          <ContextMenuItem className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
            Copy
          </ContextMenuItem>
          <ContextMenuSeparator className="mx-3 my-1" />
          <ContextMenuItem className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
            Delete
          </ContextMenuItem>
          <ContextMenuItem className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
            Rename
          </ContextMenuItem>

        </ContextMenuContent>
      </ContextMenu>

    </>
  );
}



export function SheetDemo() {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent className="glass text">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">

          </div>
          <div className="grid grid-cols-4 items-center gap-4">

          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}


export default function ContextMenuDemo() {
  return (
    <>
      <div>
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent
            className="w-48 text"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(245, 245, 245, 0.5), rgba(245, 245, 245, 0.5))",
            }}
          >
            <ContextMenuItem className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
              About This File
            </ContextMenuItem>
            <ContextMenuSeparator className="mx-3 my-1" />
            <ContextMenuItem className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
              Open
            </ContextMenuItem>
            <ContextMenuSeparator className="mx-3 my-1" />
            <ContextMenuItem className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
              Move
            </ContextMenuItem>
            <ContextMenuItem className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
              Copy
            </ContextMenuItem>
            <ContextMenuSeparator className="mx-3 my-1" />
            <ContextMenuItem className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
              Delete
            </ContextMenuItem>
            <ContextMenuItem className="py-0.5 px-3 focus:bg-[#017aff] focus:text-white rounded-[4px]">
              Rename
            </ContextMenuItem>

          </ContextMenuContent>
        </ContextMenu>
      </div>

      <Card className="w-[100vw] py-0.5  bg-[#f4f4f4] rounded-[0px]">

        <CardContent>

          <Breadcrumb className="text">
            <BreadcrumbList className="sm:gap-[1.5px] gap-[1.5px] flex-nowrap">
              <BreadcrumbItem>
                <BreadcrumbLink>
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  Components
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </BreadcrumbList>
          </Breadcrumb>
        </CardContent>
      </Card>
      <TiltCard1 />
      <SheetDemo />
      <MorphingDialogBasicTwo/>
    </>
  );
}
