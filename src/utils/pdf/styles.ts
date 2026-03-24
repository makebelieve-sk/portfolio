import { StyleSheet } from "@react-pdf/renderer";

export const COLORS = {
    primary: "#0F3987",
    darkBlue: "#000E28",
    gradientStart: "#0F3886",
    gradientEnd: "#01215F",
    bulletDark: "#012361",
    bulletLight: "#0551DC",
    white: "#FFFFFF",
    gray: "#6B7280",
} as const;

export const styles = StyleSheet.create({
    page: {
        paddingTop: 40,
        paddingBottom: 50,
        paddingHorizontal: 40,
        fontFamily: "Inter",
        fontSize: 9,
        color: COLORS.primary,
    },
    pageNumber: {
        position: "absolute",
        bottom: 20,
        right: 40,
        fontSize: 8,
        color: COLORS.gray,
    },

    sectionHeading: {
        fontFamily: "Bebas Neue",
        fontSize: 26,
        color: COLORS.primary,
        marginBottom: 10,
        textTransform: "lowercase",
    },

    h3: {
        fontSize: 11,
        fontWeight: 700,
        marginBottom: 4,
        textTransform: "uppercase",
    },

    bodyText: {
        fontSize: 9,
        lineHeight: 1.45,
        fontWeight: 500,
    },

    bulletRow: {
        flexDirection: "row",
        marginBottom: 3,
        paddingRight: 4,
    },
    bulletDot: {
        width: 5,
        height: 5,
        borderRadius: 3,
        backgroundColor: COLORS.bulletDark,
        marginRight: 6,
        marginTop: 3,
    },
    bulletText: {
        flex: 1,
        fontSize: 9,
        lineHeight: 1.4,
        fontWeight: 500,
    },

    divider: {
        height: 1,
        backgroundColor: COLORS.primary,
        opacity: 0.15,
        marginVertical: 10,
    },

    link: {
        color: COLORS.primary,
        textDecoration: "underline",
    },
});
