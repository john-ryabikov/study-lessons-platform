"use server"

import prisma from "@utils/prismaDataBase"

export const getUsers = async () => {
    try {
        const users = await prisma.user.findMany()
        return users
    } catch (error) {
        alert(error)
    } finally {
        prisma.$disconnect()
    }
}

export const createUser = async (email, name, pass) => {
    try {
        const new_user = await prisma.user.create({
            data: {
                userEmail: email,
                userName: name,
                userPass: pass
            }
        })
        return new_user
    } catch (error) {
        alert(error)
    } finally {
        prisma.$disconnect()
    }
}