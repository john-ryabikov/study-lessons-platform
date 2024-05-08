'use server'

import prisma from "@utils/prismaDataBase"

export const getUniqs = async () => {
    try {
        const uniqs = await prisma.uniqs.findMany()
        return uniqs
    } catch (error) {
        alert(error)
    } finally {
        prisma.$disconnect()
    }
}

export const deleteUniq = async (id) => {
    try {
        const result = await prisma.uniqs.delete({
            where : {
                id: id 
            }
        })
        return result
    } catch (error) {
        console.log(error)
    } finally {
        prisma.$disconnect()
    }
}