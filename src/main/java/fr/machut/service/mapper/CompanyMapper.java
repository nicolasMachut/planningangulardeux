package fr.machut.service.mapper;

import fr.machut.domain.*;
import fr.machut.service.dto.CompanyDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Company and its DTO CompanyDTO.
 */
@Mapper(componentModel = "spring", uses = {TimeSlotMapper.class, })
public interface CompanyMapper extends EntityMapper <CompanyDTO, Company> {

    @Mapping(source = "timeSlot.id", target = "timeSlotId")
    CompanyDTO toDto(Company company); 

    @Mapping(source = "timeSlotId", target = "timeSlot")
    Company toEntity(CompanyDTO companyDTO); 
    default Company fromId(Long id) {
        if (id == null) {
            return null;
        }
        Company company = new Company();
        company.setId(id);
        return company;
    }
}
