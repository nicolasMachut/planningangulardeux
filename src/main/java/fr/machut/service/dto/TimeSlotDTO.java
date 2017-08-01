package fr.machut.service.dto;


import java.time.Instant;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the TimeSlot entity.
 */
public class TimeSlotDTO implements Serializable {

    private Long id;

    @NotNull
    private Instant opening;

    @NotNull
    private Instant closing;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getOpening() {
        return opening;
    }

    public void setOpening(Instant opening) {
        this.opening = opening;
    }

    public Instant getClosing() {
        return closing;
    }

    public void setClosing(Instant closing) {
        this.closing = closing;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        TimeSlotDTO timeSlotDTO = (TimeSlotDTO) o;
        if(timeSlotDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), timeSlotDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "TimeSlotDTO{" +
            "id=" + getId() +
            ", opening='" + getOpening() + "'" +
            ", closing='" + getClosing() + "'" +
            "}";
    }
}
