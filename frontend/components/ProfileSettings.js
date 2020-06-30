import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SettingsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	border: 2px solid peachpuff;
`;

const ProfileSettings = ({
	type,
	limit,
	timeRange,
	setType,
	setLimit,
	setTimeRange
}) => {
	return <SettingsContainer></SettingsContainer>;
};

export default ProfileSettings;
