'use client'

import { Button, Flex } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation"
import { FC } from "react";

interface PaginationProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const Pagination: FC<PaginationProps> = ({ hasNextPage, hasPrevPage }) => {

  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '15'

  return (
    <Flex gap={"2"}>
      <Button 
        color="orange" 
        variant="outline" 
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`)
        }}>
          prev page
      </Button>
      <Button 
        color="orange" 
        variant="outline" 
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
          next page
      </Button>
    </Flex>
  )
}

export default Pagination;