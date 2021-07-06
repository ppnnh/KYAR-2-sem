<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="SPECIALIZATION">
        <html>
            <body>
                <table border="1">
                    <tr bgcolor="#CC99CC">
                        <th>университет</th>
                        <th>балл</th>
                        <th>набор</th>
                        <th>город</th>
                    </tr>
                 <xsl:for-each select="POIT">
                    <tr bgcolor="#FF99CC">
                        <td><xsl:value-of select="UNIVERSITY"/></td>
                        <td><xsl:value-of select="PASSING"/></td>
                        <td><xsl:value-of select="PAGES"/></td>
                        <td><xsl:value-of select="CITY"/></td>
                    </tr>
                </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>