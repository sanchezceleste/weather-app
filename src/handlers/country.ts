import prisma from '../db'

export const createCountry = async (req, res) => {
    const country = await prisma.country.create({
            data: {
                name: req.body.name,
            },
        });
        res.json(country);
    }

export const getOneCountry = async (req, res) => {
    const id = req.params.id
    const country = await prisma.country.findFirst({
        where: {
            id: id
        }
    })
    res.json({data: country})
}

export const getCountry = async (req, res) => {
    const countries = await prisma.country.findMany({
    })
    res.json({countries: countries})
}

export const updateCountry = async (req, res) => {
    const id = req.params.id
    const country = await prisma.country.update({
        where: {
            id: id
        },
        data: {
            name: req.body.name,
        }
    })
    res.json({data: country})
}

export const deleteCountry = async (req, res) => {
    const id = req.params.id
    const country = await prisma.country.delete({
        where: {
            id: id
        }
    })
    res.json(`country successully deleted`)
}

