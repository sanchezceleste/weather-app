import prisma from '../db'

export const getWeather = async (req, res) => {
    
    const countries = await prisma.country.findFirst({
    })
    res.json({countries: countries})
}