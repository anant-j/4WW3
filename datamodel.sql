CREATE TABLE `Restaurants` (
 `ID` int(11) NOT NULL AUTO_INCREMENT,
 `Name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
 `About` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
 `Phone` varchar(15) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
 `Website` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
 `Image` varchar(400) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
 `Latitude` decimal(8,6) NOT NULL,
 `Longitude` decimal(9,6) NOT NULL,
 PRIMARY KEY (`ID`)
);

CREATE TABLE `Users` (
 `Email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `Password` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
 `FirstName` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
 `LastName` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
 `DOB` date NOT NULL,
 `Latitude` decimal(8,6) NOT NULL,
 `Longitude` decimal(9,6) NOT NULL,
 PRIMARY KEY (`Email`)
);

CREATE TABLE `Reviews` (
 `ID` int(11) NOT NULL AUTO_INCREMENT,
 `RestaurantID` int(11) NOT NULL,
 `UserID` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `Title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `Rating` int(11) NOT NULL,
 `Review` varchar(400) COLLATE utf8_unicode_ci NOT NULL,
 `Date` date NOT NULL,
 PRIMARY KEY (`ID`),
 KEY `RestuarantConstraint` (`RestaurantID`),
 KEY `UserConstraint` (`UserID`),
 CONSTRAINT `RestuarantConstraint` FOREIGN KEY (`RestaurantID`) REFERENCES `Restaurants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
 CONSTRAINT `UserConstraint` FOREIGN KEY (`UserID`) REFERENCES `Users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
);

